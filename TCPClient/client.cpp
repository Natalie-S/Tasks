#include "client.h"

#include <QtNetwork/QTcpSocket>
#include <QtNetwork/QHostAddress>
#include <cstdio>

Client::Client(QObject *parent)
    : QObject(parent)
{
    mSocket = new QTcpSocket(this);
    connect(mSocket, SIGNAL(connected()), this, SLOT(onConnected()));
}

void Client::onConnected() {
    printf("Connection established.\n");
    char buffer[1024];
    forever {
        printf(">> ");
        gets(buffer);
        unsigned len = strlen(buffer);
        buffer[len] = '\n';
        buffer[len+1] = '\0';
        mSocket->write(buffer);
        mSocket->flush();
    }
}

void Client::connectToServer() {
    mSocket->connectToHost(QHostAddress::LocalHost, 1234);
}
