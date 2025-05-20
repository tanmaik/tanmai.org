export default function MinecraftMap() {
  return (
    <div style={{height: "100vh", width: "100%"}}>
      <iframe 
        src="http://minecraft.tanmai.org:8100" 
        style={{border: "none", height: "100%", width: "100%"}} 
      />
    </div>
  )
}