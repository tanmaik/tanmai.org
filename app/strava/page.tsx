export default function StravaWidget() {
  return (
    <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0 }}>
      <iframe
        height='454'
        width='300'
        frameBorder='0'
        allowTransparency={true}
        scrolling='no'
        src='https://www.strava.com/athletes/61986063/latest-rides/c02e5ce47f3711b5d45a8bcf8bdf2afae25853be'
        style={{ border: 'none', width: '100%', maxWidth: '300px', margin: '0 auto', display: 'block' }}
      />
    </div>
  );
}