import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflingeffecteffecttextModelBase } from "./PokemonV2ItemflingeffecteffecttextModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflingeffecteffecttextModel */
export interface PokemonV2ItemflingeffecteffecttextModelType extends Instance<typeof PokemonV2ItemflingeffecteffecttextModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflingeffecteffecttextModel */
export { selectFromPokemonV2Itemflingeffecteffecttext, pokemonV2ItemflingeffecteffecttextModelPrimitives, PokemonV2ItemflingeffecteffecttextModelSelector } from "./PokemonV2ItemflingeffecteffecttextModel.base"

/**
 * PokemonV2ItemflingeffecteffecttextModel
 *
 * columns and relationships of "pokemon_v2_itemflingeffecteffecttext"
 */
export const PokemonV2ItemflingeffecteffecttextModel = PokemonV2ItemflingeffecteffecttextModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
