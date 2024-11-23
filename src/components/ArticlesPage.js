import React, { useState, useEffect } from 'react';
import {
    Container,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    CircularProgress,
    Button,
    Box,
    Skeleton,
    Alert
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease-in-out',
    background: theme.palette.background.paper,
    borderRadius: '12px',
    '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: theme.shadows[10],
    }
}));

const ArticlesPage = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const extractImageFromContent = (content) => {
        const div = document.createElement('div');
        div.innerHTML = content;
        const firstImage = div.querySelector('img');
        return firstImage ? firstImage.src : null;
    };

    const fetchMediumArticles = async () => {
        try {
            const response = await fetch(
                'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mudipakishanimayanga'
            );
            if (!response.ok) throw new Error('Failed to fetch articles');
            const data = await response.json();
            
            const processedArticles = data.items.map(article => ({
                ...article,
                image: article.thumbnail || 
                       extractImageFromContent(article.content) ||
                       'https://via.placeholder.com/600x400'
            }));
            
            setArticles(processedArticles);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMediumArticles();
    }, []);

    if (loading) {
        return (
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grid container spacing={4}>
                    {[1, 2, 3].map((item) => (
                        <Grid item xs={12} md={4} key={item}>
                            <Card>
                                <Skeleton variant="rectangular" height={200} />
                                <CardContent>
                                    <Skeleton variant="text" height={40} />
                                    <Skeleton variant="text" height={20} count={3} />
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        );
    }

    if (error) {
        return (
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Alert severity="error" sx={{ mb: 4 }}>
                    {error}
                </Alert>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography 
                variant="h2" 
                component="h1" 
                gutterBottom 
                align="center"
                sx={{
                    mb: 6,
                    fontWeight: 700,
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    backgroundClip: 'text',
                    textFillColor: 'transparent',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
            >
                Latest Articles
            </Typography>
            <Grid container spacing={4}>
                {articles.map((article) => (
                    <Grid item xs={12} md={4} key={article.guid}>
                        <StyledCard>
                            <CardMedia
                                component="img"
                                height={240}
                                image={article.image}
                                alt={article.title}
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/600x400';
                                }}
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                <Typography 
                                    gutterBottom 
                                    variant="h5" 
                                    component="h2"
                                    sx={{ fontWeight: 600, mb: 2 }}
                                >
                                    {article.title}
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color="text.secondary" 
                                    sx={{ mb: 3 }}
                                >
                                    {article.description?.substring(0, 150)}...
                                </Typography>
                                <Button 
                                    variant="contained"
                                    href={article.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                        color: 'white',
                                        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                                        '&:hover': {
                                            background: 'linear-gradient(45deg, #FE6B8B 60%, #FF8E53 90%)',
                                        }
                                    }}
                                >
                                    Read More
                                </Button>
                            </CardContent>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ArticlesPage;
