import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflingeffectModelBase } from "./PokemonV2ItemflingeffectModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflingeffectModel */
export interface PokemonV2ItemflingeffectModelType extends Instance<typeof PokemonV2ItemflingeffectModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflingeffectModel */
export { selectFromPokemonV2Itemflingeffect, pokemonV2ItemflingeffectModelPrimitives, PokemonV2ItemflingeffectModelSelector } from "./PokemonV2ItemflingeffectModel.base"

/**
 * PokemonV2ItemflingeffectModel
 *
 * columns and relationships of "pokemon_v2_itemflingeffect"
 */
export const PokemonV2ItemflingeffectModel = PokemonV2ItemflingeffectModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
