import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffecteffecttextModelBase } from "./PokemonV2ContesteffecteffecttextModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffecteffecttextModel */
export interface PokemonV2ContesteffecteffecttextModelType extends Instance<typeof PokemonV2ContesteffecteffecttextModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffecteffecttextModel */
export { selectFromPokemonV2Contesteffecteffecttext, pokemonV2ContesteffecteffecttextModelPrimitives, PokemonV2ContesteffecteffecttextModelSelector } from "./PokemonV2ContesteffecteffecttextModel.base"

/**
 * PokemonV2ContesteffecteffecttextModel
 *
 * columns and relationships of "pokemon_v2_contesteffecteffecttext"
 */
export const PokemonV2ContesteffecteffecttextModel = PokemonV2ContesteffecteffecttextModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
