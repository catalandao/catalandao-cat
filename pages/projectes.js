import Image from 'next/image';
import Layout from "@/components/layout";
import useTranslation from "next-translate/useTranslation";

const Component = () => {
    const { t } = useTranslation();

    return (
        <Layout title={t("projectes:1")} className="projectes-page">
          <section className="content-wrapper py-10">
                <h1 className="text-8xl m-auto w-max text-black">
                  {t("projectes:1")}
                </h1>
                <h2 className="text-3xl m-auto w-max my-4">{t("projectes:2")}</h2>

                <nav className="flex flex-row justify-around">
                  <span className="flex">{t("projectes:3")}</span>
                  <span className="flex">{t("projectes:4")}</span>
                  <span className="flex">{t("projectes:5")}</span>
                  <span className="flex">{t("projectes:6")}</span>
                  <span className="flex">{t("projectes:7")}</span>
                </nav>
                <div className="w-full mt-12 flex-row flex">
                  <figure className="w-1/2 relative">
                    <Image src="/images/gallery/KLAS_Lampasses.png" width="1000" height="1200" layout='responsive' objectFit='contain' alt="KLAS Lampasses" />
                  </figure>
                  <div className="w-1/2 bg-red-300">
                    bidding details
                  </div>
                </div>
                <div className="grid gap-6 grid-cols-4 mt-10">
                  {[...Array(24).keys()].map(x => <span className="grid-item" key={x+1}>{x+1}</span>)}
                </div>
                <div className="details-group">
                  <div className="details">
                    <header>CatalanDAO</header>
                    <p>La CatalanDAO és la primera Organització Autònoma Descentralitzada establerta en forma de Nació Digital amb l’objectiu d’impulsar tota mena de projectes socials, culturals, artístics, lingüístics, econòmics i polítics per mitjà de les tecnologies descentralitzades i la web3.</p>
                    <p>Presentem la CatalanDAO amb una col·lecció d’NFTs d’Advent amb la que volem introduir i promocionar els artistes catalans en la blockchain i els NFTs, iniciar una comunitat de col·leccionistes d’art pioners en l’ús d’aquestes tecnologies que pugui créixer amb el temps, recaptar fons per a projectes de la CatalanDAO en entorns web3 basats en tecnologia blockchain, experimentar amb la tecnologia NFT i la blockchain, que estan en expansió i evolucionen constantment, i promocionar la cultura catalana a escala global.</p>
                    <p>Tothom hi és convidat!</p>
                  </div>
                  <div className="details">
                    <header>NFTs d’Advent</header>
                    <p>La col·lecció de Tions d’Advent que presentem és una sèrie exclusiva de 24 NFTs que donen dret a la propietat d’una pintura original de 35x50cm obra de l’artista plàstic Klas Ernflo i accés exclusiu a una nadala del duet d’artistes sonors CaboSanRoque.</p>
                    <p>Seguint el calendari d’advent de l’1 al 24 de desembre, cada dia a les dotze del migdia descobrim un NFT diferent i el posem a subhasta durant 24 hores, fins que descobrim el del dia següent. Hi pot participar tothom i qui faci l’oferta més alta aquell abans de les 23:59h es queda l’NFT.</p>
                    <p>Els NFTs d’Advent donen dret a rebre l’obra plàstica original per correu postal a qualsevol indret del món i accés exclusiu a la nadala a partir del dia de Nadal a les 12’00h de Catalunya, coincidint amb el final de la subhasta de l’últim tió no-fungible.</p>
                  </div>
                </div>
                <div className="details">
                  <header>Com licitar pels tions d’advent</header>
                  <dl>
                    <dt>Què és un NFT</dt>
                    <dd>NFT és l’acrònim de Non-Fungible Token, que podem traduir com Token No-Fungible. Els NFTs són certificats d’autenticitat basats en tecnologia de cadena de blocs (blockchain), que enregistra qualsevol tipus de format digital, qui n’és creador, qui propietari, l’ús que se’n pot fer i els privilegis que proporciona.</dd>

                    <dt>Què és un NFT d’Advent de la CatalanDAO</dt>
                    <dd>Cada NFT és únic i, en el cas dels NFTs d’Advent, representa una obra única (un tió) de l’artista Klas Ernflo. Tots els NFTs d’Advent de la CatalanDAO donen el privilegi d’accés exclusiu a una nadala de CaboSanRoque a partir de les 12’00h del 25 de desembre de 2021.</dd>

                    <dt>Com participar a la subhasta d’NFTs d’Advent de la CatalanDAO</dt>
                    <dd>La subhasta es porta a terme en la moneda criptogràfica Ether a la plataforma OpenSea, el primer mercat d’NFTs del món. Per licitar pels Tions d’Advent cal tenir una cartera criptogràfica i Ether.</dd>
                    
                    <dt>Cartera criptogràfica i criptomoneda</dt>
                    <dd>
                      Per guardar ETH i processar transaccions en la cadena de blocs cal una cartera criptogràfica com MetaMask, per exemple. Des de MetaMask mateix es pot comprar Ether amb una targeta bancària.
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/7pmA02zY8Ag" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </dd>

                    <dt>OpenSea</dt>
                    <dd>Per licitar a OpenSea cal connectar-hi la cartera criptogràfica clicant la icona ‘profile’ a la cantonada superior dreta. El missatge ‘Connectant OpenSea a la cartera’ significa que la connexió va endavant. Per personalitzar el nom d’usuari, la biografia, l’adreça de correu electrònic, la foto de perfil i la imatge de portada del compte s’ha de seleccionar la icona d’engranatge i signar amb la cartera digital acabada de connectar.</dd>

                    <dt>Licitar pel Tions d’Advent de la CatalanDAO</dt>
                    <dd>Ara que heu connectat una cartera criptogràfica a OpenSea ja podeu licitar pel NFTs d’Advent de la CatalanDao. Cada dia de l’1 de desembre fins al dia de Nadal de 2021.</dd>
                  </dl>
                </div>
                <div className="details">
                  <header>El tió de Nadal</header>
                  <p>El ritu nadalenc més popular a Catalunya és fer cagar el tió. Comença a principi de desembre, a partir del dia de la Puríssima o de santa Llúcia, quan el tronc o la soca d’un arbre, panxuda i foradada per poder-la farcir, arriba a casa per sorpresa provocant l’admiració i l’alegria dels infants. </p>
                  <p>A partir d’aquell dia i fins la nit de Nadal, la mainada en té cura: li dóna menjar i beure cada nit i el tapa amb una manta perquè no passi fred. Al dematí, quan els infants veuen que el menjar ha desaparegut, pensen que el tió se l’ha menjat i el misteri està servit. Aquesta presència omple la casa de màgica i forma part de la família fins la nit de Nadal, que es fa cagar. </p>
                  <p>Segons el costum tradicional, la cerimònia de fer cagar el tió es fa durant la nit de Nadal, abans de la Missa del Gall. El tió es posa al costat del foc, s'encèn per un extrem i es beneeix, sovint ruixant-lo amb vi o resant una oració.</p>
                  <p>Un cop beneït i tapat amb una manta, els infants s’agrupen al seu voltant, canten i li engeguen cops de bastó. El repertori de cançons per fer cagar el tió és extensíssim, cada família té la seva. Quan els infants acaben de cantar, recullen els regals, que normalment són llaminadures i dolços, torrons i neules.  </p>
                  <p>La cerimònia es pot repetir tantes vegades com es vulgui fins que el tió ja s’ha buidat del tot. Una última “cagada” especial, en la que el tronc raja una arengada ben salada o un all, ceba o algun altre element (com cendra, excrements de corder, carbó, etc.) és el senyal que fa saber als infants que no cal picar més perquè el tió ja no dóna més de si. </p>
                  <p>El Tió de Nadal és una romanalla d’un antic culte a un amulet domèstic protector de la família que els nostres avantpassats realitzaven pels volts del solstici d’hivern.</p>
                </div>
                <div className="details-group">
                  <div className="details">
                    <header>Klas Ernflo</header>
                    <figure className="m-6">
                      <Image src="/images/gallery/Klas Ernflo.png" layout="responsive" width="720" height="600" alt="Klas Ernflo" />
                    </figure>
                    <p>Klas Ernflo és un artista barceloní nascut a Estocolm el 1975.</p>
                    <p>La seva obra es formalitza en dibuixos, pintures, escultures i instal·lacions que exploren les formes dels cossos i la seva relació amb l’espai.</p>
                    <p>Format inicialment com a dissenyador a Suècia, en Klas ha mantingut una línia temàtica i formal a través de treballs independents i encàrrecs, publicats en revistes com Apartamento, Domus, Frame i Le Monde d’Hermès.</p>
                    <p><a href="https://klasherbert" target="_blank" rel="noreferrer">https://klasherbert</a></p>
                    <p><a href="https://twitter.com/klasherbert" target="_blank" rel="noreferrer">@klasherbert</a></p>
                  </div>
                  <div className="details">
                  <header>CaboSanRoque</header>
                    <figure className="m-6">
                      <Image src="/images/gallery/CaboSanRoque.png" layout="responsive" width="720" height="600" alt="CaboSanRoque" />
                    </figure>
                    <p>Laia Torrents i Roger Aixut són CaboSanRoque, un duo d’artistes sonors nascut d’un nombrós col·lectiu musical format a Barcelona l’any 2001.</p>
                    <p>A cavall entre les arts plàstiques, les arts escèniques i la música experimental, el seu treball gira al voltant de les capacitats performatives de la màquina, l’objecte i el so.</p>
                    <p>Des de 2015 són artistes residents a la Fundació Lluís Coromina a Banyoles.</p>
                    <p><a href="https://www.cabosanroque.com" target="_blank" rel="noreferrer">https://www.cabosanroque.com</a></p>
                    <p><a href="https://twitter.com/cabosanroque" target="_blank" rel="noreferrer">@cabosanroque</a></p>
                  </div>
                </div>
            </section>
        </Layout>
    );
};

export default Component;
