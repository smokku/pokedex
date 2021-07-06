import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassdescriptionStddevFieldsModelBase } from "./PokemonV2MovedamageclassdescriptionStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassdescriptionStddevFieldsModel */
export interface PokemonV2MovedamageclassdescriptionStddevFieldsModelType extends Instance<typeof PokemonV2MovedamageclassdescriptionStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassdescriptionStddevFieldsModel */
export { selectFromPokemonV2MovedamageclassdescriptionStddevFields, pokemonV2MovedamageclassdescriptionStddevFieldsModelPrimitives, PokemonV2MovedamageclassdescriptionStddevFieldsModelSelector } from "./PokemonV2MovedamageclassdescriptionStddevFieldsModel.base"

/**
 * PokemonV2MovedamageclassdescriptionStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovedamageclassdescriptionStddevFieldsModel = PokemonV2MovedamageclassdescriptionStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
