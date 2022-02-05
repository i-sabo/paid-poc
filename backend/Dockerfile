FROM java

COPY . .

RUN ./gradlew build

CMD ["java", "-jar", "build/libs/react-boot-backend-0.0.1.jar"]
