// pages/minecraft/map.js
export default function MinecraftMap() {
  return (
    <div style={{height: "100vh", width: "100%"}}>
      <iframe 
        src="https://minecraft.tanmai.org" 
        style={{border: "none", height: "100%", width: "100%"}} 
        allow="fullscreen"
      />
    </div>
  )
}