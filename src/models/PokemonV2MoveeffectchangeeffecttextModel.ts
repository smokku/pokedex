import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectchangeeffecttextModelBase } from "./PokemonV2MoveeffectchangeeffecttextModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectchangeeffecttextModel */
export interface PokemonV2MoveeffectchangeeffecttextModelType extends Instance<typeof PokemonV2MoveeffectchangeeffecttextModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectchangeeffecttextModel */
export { selectFromPokemonV2Moveeffectchangeeffecttext, pokemonV2MoveeffectchangeeffecttextModelPrimitives, PokemonV2MoveeffectchangeeffecttextModelSelector } from "./PokemonV2MoveeffectchangeeffecttextModel.base"

/**
 * PokemonV2MoveeffectchangeeffecttextModel
 *
 * columns and relationships of "pokemon_v2_moveeffectchangeeffecttext"
 */
export const PokemonV2MoveeffectchangeeffecttextModel = PokemonV2MoveeffectchangeeffecttextModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
