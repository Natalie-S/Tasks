#include "server.h"

#include <QtNetwork/QTcpServer>
#include <QtNetwork/QTcpSocket>
#include <cstdio>

Server::Server(QObject *parent) :
    QObject(parent)
{
    mServer = new QTcpServer(this);
    connect(mServer, SIGNAL(newConnection()), this, SLOT(onNewConnection()));
}

void Server::listen() {
    mServer->listen(QHostAddress::LocalHost, 1234);
}

void Server::onNewConnection() {
    mSocket = mServer->nextPendingConnection();
    if(mSocket->state() == QTcpSocket::ConnectedState) {
        printf("New connection established.\n");
    }

    connect(mSocket, SIGNAL(disconnected()), this, SLOT(onDisconnected()));
    connect(mSocket, SIGNAL(readyRead()), this, SLOT(onReadyRead()));
}

void Server::onReadyRead() {
    while(mSocket->canReadLine()) {
        QByteArray ba = mSocket->readLine();
        if(strcmp(ba.constData(), "!exit\n") == 0) {
            mSocket->disconnectFromHost();
            break;
        }

        printf(">> %s", ba.constData());
    }
}

void Server::onDisconnected() {
    printf("Connection disconnected.\n");
    disconnect(mSocket, SIGNAL(disconnected()));
    disconnect(mSocket, SIGNAL(readyRead()));
    mSocket->deleteLater();
}
