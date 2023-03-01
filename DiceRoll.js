if (!$this.scene.dieClick) {
  var roll1 = Math.floor(Math.random() * 6) + 1;
  var roll2 = Math.floor(Math.random() * 6) + 1;
  die1.frameIndex(roll1);
  die2.frameIndex(roll2);
  totalText.text(roll1 + roll2 + 2);
  $this.scene.dieClick = true;
}
