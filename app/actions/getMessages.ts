import prisma from "@/app/libs/prismadb";
import { Message } from "@prisma/client";

const getMessages = async (conversationId: string) => {
  try {
    const messages = await prisma.message.findMany({
      where: {
        conversationId: conversationId,
      },
      include: {
        sender: true,
        seen: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return messages as Message[];
  } catch (error: any) {
    return [];
  }
};

export default getMessages;
