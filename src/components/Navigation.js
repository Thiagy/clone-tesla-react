export default function Navigation({ arrayOptionNav }) {
  
    // Css da barra das opções de navegação
    const barNavigation = {
      backgroundColor: 'black',
    };
  
    // Css da palavra dentro da opção de navegação
    const wordNavigation = {
      color: 'black',
    };
  
    // Css da div das opções de navegação da página
    const optionNav = {
      display: 'flex',
      marginBottom: '5px',
      alignItems: 'center',
      gap: '4px',
      cursor: 'pointer',
    };
  
    return (
      <div className="manual-navigation">
        {arrayOptionNav.map((option, index) => (
          <div key={index} style={optionNav}>
            <a href={`#section-${index + 1}`} className="block-white" style={barNavigation}></a>
            <a href={`#section-${index + 1}`} className="text-block-white" style={wordNavigation}>
              {option}
            </a>
          </div>
        ))}
      </div>
    );
  }
  