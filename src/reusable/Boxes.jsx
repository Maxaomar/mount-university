export function TitleBox(props) {
  return(
    <footer className="bg-orange-300">
          <div class="flex items-center space-x-4">
              <div class="flex-1 h-px bg-lineColor"></div>
              <div class="px-4 py-2 bg-blue-500 text-white rounded">{props.title}</div>
              <div className="flex-1 h-px bg-lineColor"></div>
          </div>
          <line2 />
    </footer>
  )
}


