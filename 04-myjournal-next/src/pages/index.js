import { ArticleList } from "@/components/ArticleList";
import { db } from "@/db";
import { Box, Button, Typography } from "@mui/joy";
import Container from "@mui/joy/Container";

import Head from "next/head";

export default function ArticleListPage({data}) {
  return (
    <Container sx={{ py: 2 }}>
      <Box textAlign="right" mb={2}>
        <Button component="a" href="/add">
          Add article
        </Button>
      </Box>
      <ArticleList data={data} />
    </Container>
  );
}

export const getServerSideProps = async () => {
  const data = await db.listArticles()

  return{
    props:{
      data: data.map((item) => ({
        ...item,
        createdAt: item.createdAt.toISOString()
      }))
    }
  }
}

