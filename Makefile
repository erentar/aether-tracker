TARGET = example
LIBS = -lcurl -ljsoncpp
CC = g++

.PHONY: default all clean

-DCMAKE_TOOLCHAIN_FILE=/mnt/c/PROJECTS/aethercode/weatherproject/vcpkg/scripts/buildsystems/vcpkg.cmake

default: $(TARGET)
all: default

OBJECTS = $(patsubst src/%.cpp, src/%.o, $(wildcard src/*.cpp) *.cpp)
HEADERS = $(wildcard src/*.h)

%.o: %.cpp $(HEADERS)
	$(CC) $(CFLAGS) -c $< -o $@

.PRECIOUS: $(TARGET) $(OBJECTS)

$(TARGET): $(OBJECTS)
	$(CC) $(OBJECTS) -Wall $(LIBS) -o $@

clean:
	-rm -f src/*.o
	-rm -f $(TARGET)