#include "client.h"
#include <QtCore/QCoreApplication>

int main(int argc, char *argv[]) {
    QCoreApplication a(argc, argv);
    Client c;
    c.connectToServer();
    return a.exec();
}
