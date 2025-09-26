export default function StravaWidget() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0'
    }}>
      <iframe
        height='454'
        width='300'
        frameBorder='0'
        scrolling='no'
        src='https://www.strava.com/athletes/61986063/latest-rides/c02e5ce47f3711b5d45a8bcf8bdf2afae25853be'
        style={{
          border: 'none',
          width: '300px',
          height: '454px'
        }}
      />
    </div>
  );
}