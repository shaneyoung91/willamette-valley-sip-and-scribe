import { Container, Card } from "react-bootstrap";
import './WelcomePage.css';

export default function WelcomePage() {
    return (
        <>
            <Container className="welcome-body">
                <h1>Welcome!</h1>
                <br />
                <p>
                    Embark on a journey through the picturesque landscapes and exquisite flavors of Oregon wine. Designed for wine enthusiasts and wanderers alike, this app invites you to discover, savor, and share your experiences at the renowned wineries nestled within Oregon's captivating Willamette Valley region.
                </p>
                <p>
                    Sip on the valley's finest Pinot Noirs, Chardonnays, Rosés, and more, while our app empowers you to document your tasting experiences. Leave thoughtful and insightful reviews that not only capture the flavor profiles but also the ambiance, service, and the overall aura of each winery. Your reviews will not only guide fellow wine enthusiasts but also contribute to the Oregon wine community.
                </p>
        </Container>
        </>
    );
}
