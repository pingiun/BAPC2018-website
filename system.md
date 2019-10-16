---
layout: default
title: System
menutitle: System
order: 4
menu: contest
---

#### Changelog

The changelog tracks changes from September 30, 2019 onwards.

1. 30 September, 2019: added note that NetBeans may not be available.
2. 7 October, 2019: NetBeans will not be available, updated versions of installed software and compilation options.
3. 16 October, 2019: Kotlin added also for student teams.

#### Overview

The system is based on Ubuntu 18.04 LTS.
It will be possible to submit solutions using C99, C++17, Java 11, Python 2.7, Python 3.6 and Kotlin 1.3.50.

#### Documentation
Documentation for C, C++, Java, Python 2, Python 3, and Kotlin will be available through [zeal](https://zealdocs.org/).

#### Compilation options
**Note**: these are subject to minor changes before the contest

For C and C++, the flag `-g` will be disabled on the judge systems.
During the contest, the commands given below will be provided respectively as `mygcc`, `myg++`, `myjavac`, `myjava`, `mypython2` and `mypython3`.

##### C99
```
gcc -x c -Wall -O2 -std=gnu99 -static -pipe "$@" -lm
```

##### C++17
```
g++ -x c++ -Wall -O2 -std=c++17 -static -pipe "$@"
```

##### Java

###### Compilation:
````
javac -encoding UTF-8 -d . "$@"
````

###### Runtime:
````
java -Xrs -XX:+UseSerialGC -Xss65536k -Xms1441792k -Xmx1441792k $@
````

##### Python 2
````
pypy "$@"
````

##### Python 3
```
python3 "$@"
```

#### Available software
**Note**: as the exact versions of installed software are not under our control, the actually available version might differ slightly.

For each language, even though there may be more libraries available on the contestant systems,
only the compiler and its standard libraries will be available on the judge systems!

##### Compiler versions
* **C & C++**: GCC 7.4.0
* **Java**: OpenJDK 11.0.4
* **Python 2**: Python 2.7.13 (PyPy 5.10)
* **Python 3**: Python 3.6.8

##### IDEs and editors (with additional installed plugins)
* **Eclipse** 2019-06 (4.12.0)
    * **CDT** 9.8.0
* **IntelliJ IDEA CE** 2019.2.2
* **PyCharm CE** 2019.2.1
* **KDevelop** 5.2.1
* **QtCreator** 4.5.2
* **Visual Studio Code** 1.38.1
    * **C/C++** 0.25.1
    * **Java Language Support** 0.50.0
    * **Python** 2019.9.34911
* **CodeBlocks** 16.01
* **Geany** 1.32
* **Emacs** 25.2.2
* **Vim** 8.0.1453
* **Kate** 17.12.3
* **Gedit** 3.28.1
* **Nano** 2.9.3
* ~~*NetBeans 10.0*~~
    * **Note**: Unfortunately, NetBeans won't be available.

##### Other
* **Bash** 4.4
* **Make** 4.1
* **GDB** 8.1
* **Valgrind** 3.13.0
* **Git** 2.17.1
* **Screen** 4.06.02
* **Tmux** 2.6
* **Galculator** 2.1.4
* **Evince** 3.28.4
