type DotProps = {
  onClick: React.MouseEventHandler
}

const Dot: React.FC<DotProps> = ({ onClick }) => {
  return (
    <button 
      style={{
        background: '#ddd',
        border: 'none',
        width: 10,
        height: 10,
        marginLeft: 10,
        padding: 0,
        borderRadius: '50%',
        transition: 'background 500ms ease 0s',
      }} 
      onClick={onClick}></button>
  );
}

export default Dot;