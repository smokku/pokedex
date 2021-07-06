import { Instance } from "mobx-state-tree"
import { PokemonV2ItemeffecttextModelBase } from "./PokemonV2ItemeffecttextModel.base"

/* The TypeScript type of an instance of PokemonV2ItemeffecttextModel */
export interface PokemonV2ItemeffecttextModelType extends Instance<typeof PokemonV2ItemeffecttextModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemeffecttextModel */
export { selectFromPokemonV2Itemeffecttext, pokemonV2ItemeffecttextModelPrimitives, PokemonV2ItemeffecttextModelSelector } from "./PokemonV2ItemeffecttextModel.base"

/**
 * PokemonV2ItemeffecttextModel
 *
 * columns and relationships of "pokemon_v2_itemeffecttext"
 */
export const PokemonV2ItemeffecttextModel = PokemonV2ItemeffecttextModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
