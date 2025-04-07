export type RecordOptions = {
  name: string;
  fps: number;
  window: string;
  output: string;
};

export default function record(options: RecordOptions) {
  const { name, fps, window, output } = options;

  console.log('Recording a screenshot dataset with the following options:');
  console.log(`Name: ${name}`);
  console.log(`FPS: ${fps}`);
  console.log(`Window: ${window}`);
  console.log(`Output: ${output}`);
}
