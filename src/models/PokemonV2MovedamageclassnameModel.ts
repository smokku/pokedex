import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassnameModelBase } from "./PokemonV2MovedamageclassnameModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassnameModel */
export interface PokemonV2MovedamageclassnameModelType extends Instance<typeof PokemonV2MovedamageclassnameModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassnameModel */
export { selectFromPokemonV2Movedamageclassname, pokemonV2MovedamageclassnameModelPrimitives, PokemonV2MovedamageclassnameModelSelector } from "./PokemonV2MovedamageclassnameModel.base"

/**
 * PokemonV2MovedamageclassnameModel
 *
 * columns and relationships of "pokemon_v2_movedamageclassname"
 */
export const PokemonV2MovedamageclassnameModel = PokemonV2MovedamageclassnameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
