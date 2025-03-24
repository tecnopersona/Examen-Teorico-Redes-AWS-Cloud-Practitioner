export const questions = [
    {
        question: "¿Cuál de las siguientes opciones representa mejor una VPC en AWS?",
        options: [
            "Un servidor físico dedicado alojado en AWS.",
            "Una red virtual aislada lógicamente dentro de AWS.",
            "Un servicio de almacenamiento de objetos en AWS.",
            "Una herramienta de monitorización de rendimiento de aplicaciones en AWS."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué servicio de AWS se utiliza para establecer una conexión de red dedicada desde tu red on-premise a AWS?",
        options: [
            "AWS Direct Connect",
            "Amazon VPC Peering",
            "AWS VPN Gateway",
            "Amazon Route 53"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Cuál es el propósito de los Security Groups en AWS?",
        options: [
            "Monitorizar el uso de recursos de AWS.",
            "Actuar como un firewall virtual para controlar el tráfico de entrada y salida de las instancias EC2.",
            "Gestionar identidades y acceso a los recursos de AWS.",
            "Automatizar la implementación de aplicaciones en AWS."
        ],
        correctAnswer: 1
    },
    {
        question: "Qué protocolo se utiliza para acceso remoto seguro a instancias EC2?",
        options: [
            "HTTP",
            "FTP",
            "SSH",
            "Telnet"
        ],
        correctAnswer: 2
    },
    {
        question: "¿Cuál de las siguientes NO es una ventaja de usar una arquitectura basada en la nube de AWS?",
        options: [
            "Escalabilidad bajo demanda",
            "Pago por uso",
            "Mayor control sobre el hardware físico",
            "Alta disponibilidad y redundancia"
        ],
        correctAnswer: 2
    },
    {
        question: "¿Qué componente de AWS permite distribuir tráfico de aplicaciones entrantes entre múltiples destinos, como instancias EC2?",
        options: [
            "Amazon S3",
            "Elastic Load Balancing (ELB)",
            "Amazon RDS",
            "Amazon CloudWatch"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Cuál de las siguientes opciones describe mejor una subred pública en AWS?",
        options: [
            "Una subred que solo puede ser accedida por instancias EC2 dentro de la misma VPC.",
            "Una subred que tiene una ruta a un Internet Gateway.",
            "Una subred que está completamente aislada de Internet.",
            "Una subred utilizada para almacenar datos confidenciales."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué servicio de AWS se utiliza para gestionar el registro de nombres de dominio?",
        options: [
            "Amazon Route 53",
            "AWS Certificate Manager",
            "Amazon CloudFront",
            "AWS Direct Connect"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Cuál es la función principal de un Network ACL (Access Control List) en AWS?",
        options: [
            "Controlar el acceso a los buckets de Amazon S3.",
            "Actuar como un firewall a nivel de subred, controlando el tráfico de entrada y salida.",
            "Gestionar las políticas de identidad y acceso para usuarios de AWS.",
            "Monitorizar el rendimiento de la red en AWS."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué tipo de instancia EC2 es ideal para cargas de trabajo con picos de uso intermitentes?",
        options: [
            "Instancias reservadas",
            "Instancias bajo demanda",
            "Instancias spot",
            "Instancias dedicadas"
        ],
        correctAnswer: 2
    },
    {
        question: "¿Cuál de los siguientes servicios de AWS proporciona almacenamiento de objetos escalable?",
        options: [
            "Amazon EBS",
            "Amazon EC2",
            "Amazon S3",
            "Amazon RDS"
        ],
        correctAnswer: 2
    },
    {
        question: "¿Qué servicio de AWS permite automatizar la creación, el despliegue y la gestión de la infraestructura?",
        options: [
            "AWS CloudFormation",
            "Amazon EC2 Auto Scaling",
            "AWS Config",
            "AWS Lambda"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es AWS IAM?",
        options: [
            "Un servicio de almacenamiento.",
            "Un servicio de base de datos.",
            "Un servicio de gestión de identidad y acceso.",
            "Un servicio de computación."
        ],
        correctAnswer: 2
    },
    {
        question: "¿Cuál de los siguientes es un servicio de base de datos relacional ofrecido por AWS?",
        options: [
            "Amazon DynamoDB",
            "Amazon Redshift",
            "Amazon RDS",
            "Amazon SQS"
        ],
        correctAnswer: 2
    },
    {
        question: "¿Cuál es el propósito de Amazon CloudFront?",
        options: [
            "Proporcionar almacenamiento de objetos.",
            "Acelerar la entrega de contenido web.",
            "Gestionar bases de datos relacionales.",
            "Automatizar la implementación de aplicaciones."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué servicio de AWS se utiliza para enviar notificaciones push, correos electrónicos y mensajes SMS?",
        options: [
            "Amazon SNS",
            "Amazon SQS",
            "Amazon SES",
            "Amazon CloudWatch"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Cuál de las siguientes opciones es un servicio de colas de mensajes de AWS?",
        options: [
            "Amazon SNS",
            "Amazon SQS",
            "Amazon RDS",
            "Amazon CloudFront"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué servicio de AWS permite ejecutar código sin necesidad de aprovisionar o administrar servidores?",
        options: [
            "Amazon EC2",
            "AWS Lambda",
            "Amazon ECS",
            "Amazon EKS"
        ],
        correctAnswer: 1
    },
    {
        question: "¿Cuál es el propósito de AWS CloudTrail?",
        options: [
            "Monitorizar el rendimiento de las aplicaciones.",
            "Rastrear la actividad del usuario y los cambios en la configuración de AWS.",
            "Gestionar las políticas de seguridad de IAM.",
            "Automatizar la copia de seguridad de los datos."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué servicio de AWS proporciona capacidades de almacenamiento en bloque para instancias EC2?",
        options: [
            "Amazon S3",
            "Amazon EBS",
            "Amazon EFS",
            "Amazon Glacier"
        ],
        correctAnswer: 1
    }
];
