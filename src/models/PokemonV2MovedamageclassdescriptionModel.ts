import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassdescriptionModelBase } from "./PokemonV2MovedamageclassdescriptionModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassdescriptionModel */
export interface PokemonV2MovedamageclassdescriptionModelType extends Instance<typeof PokemonV2MovedamageclassdescriptionModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassdescriptionModel */
export { selectFromPokemonV2Movedamageclassdescription, pokemonV2MovedamageclassdescriptionModelPrimitives, PokemonV2MovedamageclassdescriptionModelSelector } from "./PokemonV2MovedamageclassdescriptionModel.base"

/**
 * PokemonV2MovedamageclassdescriptionModel
 *
 * columns and relationships of "pokemon_v2_movedamageclassdescription"
 */
export const PokemonV2MovedamageclassdescriptionModel = PokemonV2MovedamageclassdescriptionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
