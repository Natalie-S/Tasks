#pragma once
#include <QtCore/QObject>

class QTcpSocket;

class Client : public QObject
{
    Q_OBJECT
    public:
        explicit Client(QObject *parent = 0);
        void connectToServer();
    signals:

    public slots:
        void onConnected();
    private:
        QTcpSocket *mSocket;
};
