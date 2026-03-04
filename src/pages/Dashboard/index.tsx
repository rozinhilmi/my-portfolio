import { LazyLoadImage } from "@/components/Image";
import { helper } from "@/utils/helper";
// import { useStyle } from "@/components/theme";
import { Avatar, Button, Grid, GridItem, HStack, Image, List, Stack, Text, Timeline } from "@chakra-ui/react";
import { Link } from "react-router";

export const Index = () => {
  return (
    <Stack width={"100%"} alignItems={"center"} position={"relative"}>
      <HStack
        width={"100%"}
        maxWidth={"1440px"}
        height={"90vh"}
        maxHeight={"729px"}
        backgroundColor={"white"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"75px"}
        padding={"20px"}
      >
        <LazyLoadImage src="/person-1.png" height={"80vh"} maxHeight={"648px"} />
        <Stack
          gap={"0px"}
          boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
          padding={"15px"}
          borderRadius={"20px"}
          alignItems={"center"}
          width={"500px"}
          maxWidth={"95%"}
          position={{ base: "absolute", md: "unset" }}
          backgroundColor={"whiteAlpha.800"}
        >
          <Text fontSize={"48px"} as={"b"}>
            Rozin Hilmi
          </Text>
          <Text fontSize={"lg"}>Full Stack Software Engineer</Text>
          <Button marginTop={"20px"}>
            <a href="/CV.pdf" download>
              Download CV
            </a>
          </Button>
          <HStack gap={4} marginTop={"20px"}>
            {socials.map((social) => (
              <Link key={social.name} to={social.url} target="_blank">
                <Image src={social.src} alt={social.name} boxSize="34px" transition="transform 0.2s" _hover={{ transform: "scale(1.2)" }} />
              </Link>
            ))}
          </HStack>
        </Stack>
      </HStack>

      <Stack
        width={"calc(100% - 40px)"}
        maxWidth={"1440px"}
        padding={"30px"}
        boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
        backgroundColor={"gray.50"}
      >
        <List.Root width={"100%"} maxWidth={"1000px"} margin={"auto"} gap={"10px"}>
          <Text fontSize={"32px"} as={"b"} textAlign={"center"}>
            About Me
          </Text>
          <List.Item textAlign={"justify"} color={"gray.600"}>
            I am a Software Engineer with 3 years of experience in application development.
          </List.Item>
          <List.Item textAlign={"justify"} color={"gray.600"}>
            I specialize in developing applications, Database Management Systems (DBMS), and both Front-End and Back-End Development.
          </List.Item>
          <List.Item textAlign={"justify"} color={"gray.600"}>
            Additionally, I am skilled in deploying applications to servers and ensuring their optimal performance.
          </List.Item>
          <List.Item textAlign={"justify"} color={"gray.600"}>
            Throughout my career, I have applied my expertise across various industries, including software houses, property companies, construction
            companies, and large-scale publicly listed companies (Tbk).
          </List.Item>
          <List.Item textAlign={"justify"} color={"gray.600"}>
            My focus is on building modern web applications end-to-end, from design and development to deployment.
          </List.Item>
          <List.Item textAlign={"justify"} color={"gray.600"}>
            I also possess strong teamwork skills, collaborating effectively to deliver innovative and efficient technology solutions.
          </List.Item>
          <List.Item textAlign={"justify"} color={"gray.600"}>
            I am eager to continue deepening my knowledge in web development and seek further opportunities to broaden my experience in the
            professional world.
          </List.Item>
        </List.Root>
      </Stack>

      <Stack alignItems={"center"} width={"100%"} maxWidth={"1000px"}>
        <Text fontSize={"32px"} as={"b"} marginTop={"20px"}>
          Public Project Experience
        </Text>
        <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap="6">
          <GridItem colSpan={1} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"} gap={0}>
            <LazyLoadImage src="/sepakat-properti.png" width={"100%"} aspectRatio={"16/9"} />
            <Stack margin={"20px"}>
              <Text fontSize={"25px"} as={"b"}>
                sepakat.co.id
              </Text>
              <Text color={"gray.700"} as={"b"}>
                Front End Developer at PT Andalan Solusi Cemerlang
              </Text>
              <Text color={"gray.600"}>
                Property sales application with features presenting property lists, property specifications, and property transactions
              </Text>
            </Stack>
          </GridItem>
          <GridItem colSpan={1} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"} gap={0}>
            <LazyLoadImage src="/kelava.png" width={"100%"} aspectRatio={"16/9"} />
            <Stack margin={"20px"}>
              <Text fontSize={"25px"} as={"b"}>
                kelava.id
              </Text>
              <Text color={"gray.700"} as={"b"}>
                Full Stack Developer at PT Andromedia Indonesia
              </Text>
              <Text color={"gray.600"}>
                Manage your sales team with an integrated system. Increase productivity, analyze performance, and achieve business targets more
                easily.
              </Text>
            </Stack>
          </GridItem>
        </Grid>
      </Stack>

      <Stack
        alignItems={"center"}
        width={"calc(100% - 40px)"}
        maxWidth={"1440px"}
        padding={"30px"}
        boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
        backgroundColor={"gray.50"}
        marginTop={"20px"}
      >
        <Text fontSize={"32px"} as={"b"}>
          Work Experience
        </Text>
        <Timeline.Root maxW="400px" size={"xl"}>
          <Timeline.Item>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator>
                <Avatar.Root size="xl">
                  <Avatar.Image src="/logo-acset.jpg" />
                </Avatar.Root>
              </Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title>PT Acset Indonusa Tbk (Member Of Astra)</Timeline.Title>
              <Timeline.Description>
                January 2024 - March 2026 ({helper.getDuration({ month: 1, year: 2024 }, { month: 3, year: 2026 })})
              </Timeline.Description>
              <Text textStyle="sm">Full Stack Developer</Text>
            </Timeline.Content>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator>
                <Avatar.Root size="xl">
                  <Avatar.Image src="/logo-asc.jpg" />
                </Avatar.Root>
              </Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title>PT Andalan Solusi Cemerlang</Timeline.Title>
              <Timeline.Description>
                June 2023 - October 2023 ({helper.getDuration({ month: 6, year: 2023 }, { month: 10, year: 2023 })})
              </Timeline.Description>
              <Text textStyle="sm">Front-End Developer</Text>
            </Timeline.Content>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator>
                <Avatar.Root size="xl">
                  <Avatar.Image src="/logo-andromedia.jpeg" />
                </Avatar.Root>
              </Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title>PT Andromedia Indonesia</Timeline.Title>
              <Timeline.Description>
                January 2022 - December 2022 ({helper.getDuration({ month: 1, year: 2022 }, { month: 12, year: 2022 })})
              </Timeline.Description>
              <Text textStyle="sm">Full Stack Developer</Text>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      </Stack>

      <Stack alignItems={"center"} width={"100%"} maxWidth={"1000px"}>
        <Text fontSize={"32px"} as={"b"} marginTop={"20px"}>
          My Services
        </Text>
        <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap="6">
          <GridItem colSpan={1} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"} gap={0}>
            <LazyLoadImage src="/landing-page-services.png" width={"100%"} aspectRatio={"16/9"} />
            <Stack margin={"20px"}>
              <Text fontSize={"18px"} as={"b"} lineHeight={"30px"} textAlign={"center"}>
                Development End to End High Scalable Web Application
              </Text>
              <Text color={"gray.600"} textAlign={"justify"}>
                Designing and developing end-to-end highly scalable web applications, from system architecture planning to frontend and backend
                implementation, ensuring performance, security, and maintainability.
              </Text>
            </Stack>
          </GridItem>
          <GridItem colSpan={1} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"} gap={0}>
            <LazyLoadImage src="/database.png" width={"100%"} aspectRatio={"16/9"} />
            <Stack margin={"20px"}>
              <Text fontSize={"18px"} as={"b"} lineHeight={"30px"} textAlign={"center"}>
                Database Management System And Restfull API
              </Text>
              <Text color={"gray.600"} textAlign={"justify"}>
                Building and optimizing database management systems and developing secure, well-structured RESTful APIs to ensure efficient data
                handling, seamless integration, and reliable system communication.
              </Text>
            </Stack>
          </GridItem>
          <GridItem colSpan={1} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"} gap={0}>
            <LazyLoadImage src="/domain.png" width={"100%"} aspectRatio={"16/9"} />
            <Stack margin={"20px"}>
              <Text fontSize={"18px"} as={"b"} lineHeight={"30px"} textAlign={"center"}>
                Deployment & DevOps
              </Text>
              <Text color={"gray.600"} textAlign={"justify"}>
                Managing application deployment processes and implementing DevOps best practices, including CI/CD pipelines, server configuration,
                containerization, and performance monitoring to ensure reliable and scalable production environments.
              </Text>
            </Stack>
          </GridItem>
        </Grid>
      </Stack>

      <Stack
        alignItems={"center"}
        width={"calc(100% - 40px)"}
        maxWidth={"1440px"}
        padding={"30px"}
        boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
        backgroundColor={"gray.50"}
      >
        <Text fontSize={"32px"} as={"b"} marginTop={"20px"}>
          Tech Stack
        </Text>
        <Text color={"gray.600"}>
          I continuously research and explore the latest technologies and tech stacks to enhance performance, maintainability, and scalability in my
          projects.
        </Text>
        <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap="6" marginTop={"20px"}>
          <GridItem colSpan={1} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"} gap={0}>
            <LazyLoadImage src="https://cdn.simpleicons.org/react/61DAFB" width={"50%"} maxWidth={"100px"} margin={"auto"} />
            <Stack margin={"20px"}>
              <Text fontSize={"25px"} as={"b"}>
                React - Frontend Development
              </Text>
              <Text color={"gray.600"}>
                Building interactive and responsive user interfaces with a component-based architecture for modern web applications.
              </Text>
            </Stack>
          </GridItem>
          <GridItem colSpan={1} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"} gap={0}>
            <LazyLoadImage src="https://cdn.simpleicons.org/nextdotjs/000000" width={"100%"} maxWidth={"100px"} margin={"auto"} />
            <Stack margin={"20px"}>
              <Text fontSize={"25px"} as={"b"}>
                Next.js - SEO Optimization
              </Text>
              <Text color={"gray.600"}>
                Developing server-rendered and statically generated applications to improve performance, SEO, and overall user experience.
              </Text>
            </Stack>
          </GridItem>
          <GridItem colSpan={1} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"} gap={0}>
            <LazyLoadImage src="https://cdn.simpleicons.org/nodedotjs/339933" width={"100%"} maxWidth={"100px"} margin={"auto"} />
            <Stack margin={"20px"}>
              <Text fontSize={"25px"} as={"b"}>
                Node.js - RESTful API Development
              </Text>
              <Text color={"gray.600"}>
                Creating scalable and efficient RESTful APIs to handle business logic and seamless communication between frontend and backend systems.
              </Text>
            </Stack>
          </GridItem>
          <GridItem colSpan={1} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"} gap={0}>
            <LazyLoadImage src="https://cdn.simpleicons.org/mysql/4479A1" width={"100%"} maxWidth={"100px"} margin={"auto"} />
            <Stack margin={"20px"}>
              <Text fontSize={"25px"} as={"b"}>
                SQL - Database Management System
              </Text>
              <Text color={"gray.600"}>
                Designing and managing structured databases to ensure data integrity, optimized queries, and reliable data storage.
              </Text>
            </Stack>
          </GridItem>
          <GridItem colSpan={1} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"} gap={0}>
            <LazyLoadImage src="https://cdn.simpleicons.org/nginx/009639" width={"100%"} maxWidth={"100px"} margin={"auto"} />
            <Stack margin={"20px"}>
              <Text fontSize={"25px"} as={"b"}>
                NGINX - Web Services
              </Text>
              <Text color={"gray.600"}>
                Configuring and managing web servers for reverse proxy, load balancing, and high-performance application delivery.
              </Text>
            </Stack>
          </GridItem>
          <GridItem colSpan={1} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"} gap={0}>
            <LazyLoadImage src="https://cdn.simpleicons.org/socketdotio/010101" width={"100%"} maxWidth={"100px"} margin={"auto"} />
            <Stack margin={"20px"}>
              <Text fontSize={"25px"} as={"b"}>
                Socket.IO - Real-Time Data Transactions
              </Text>
              <Text color={"gray.600"}>
                Implementing real-time communication to display live data updates and transaction activities efficiently and reliably.
              </Text>
            </Stack>
          </GridItem>
        </Grid>
      </Stack>
    </Stack>
  );
};

type Social = {
  name: string;
  url: string;
  src: string;
};

const socials: Social[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rozinhilmi",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg",
  },
  {
    name: "GitHub",
    url: "https://github.com/rozinhilmi",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@rozinhilmii",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tiktok.svg",
  },
  {
    name: "Email",
    url: "mailto:rozinhilmi@gmail.com",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg",
  },
];
