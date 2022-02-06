FROM maven as builder

ENV MAVEN_CONFIG=''
WORKDIR /usr/src/app

COPY . .

RUN ./mvnw clean install

FROM openjdk

WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/target/demo-be-0.0.1-SNAPSHOT.jar .
CMD ["java", "-jar", "demo-be-0.0.1-SNAPSHOT.jar"]

