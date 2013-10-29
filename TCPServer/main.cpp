#include "server.h"

#include <QtCore/QCoreApplication>

int main(int argc, char *argv[]) {
    QCoreApplication a(argc, argv);
    Server s;
    s.listen();
    return a.exec();
}
