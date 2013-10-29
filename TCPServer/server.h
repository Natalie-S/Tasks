#pragma once
#include <QtCore/QObject>

class QTcpServer;

class QTcpSocket;

class Server : public QObject
{
    Q_OBJECT
    public:
        explicit Server(QObject *parent = 0);
        void listen();
    signals:

    public slots:
        void onNewConnection();
        void onReadyRead();
        void onDisconnected();
    private:
        QTcpServer *mServer;
        QTcpSocket *mSocket;
};

