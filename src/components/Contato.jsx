export default function Contato() {
    return (
        <section className="w-full px-10 py-20 max-w-6xl mx-auto mt-20 text-white font-serif">
            <h2 className="text-4xl mb-10">Contato</h2>
            
            <div className="text-lg mb-8">
                <p className="mb-4">
                    <strong>E-mail:</strong> yaasyribeiro@gmail.com
                </p>
                
                <p className="mb-4">
                    <strong>Telefone:</strong> (11) 97455-3111
                </p>
                

            </div>
            <br />
                <p> <strong>Linkedin</strong> </p>
            <a 
            
    href="https://www.linkedin.com/in/yasmin-ribeiro-11361a356/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-block bg-[#0077b5] hover:bg-[#00669c] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
>
    Acessar LinkedIn
</a>
        </section>
    );
}