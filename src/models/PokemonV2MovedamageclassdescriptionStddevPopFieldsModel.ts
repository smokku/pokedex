import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassdescriptionStddevPopFieldsModelBase } from "./PokemonV2MovedamageclassdescriptionStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassdescriptionStddevPopFieldsModel */
export interface PokemonV2MovedamageclassdescriptionStddevPopFieldsModelType extends Instance<typeof PokemonV2MovedamageclassdescriptionStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassdescriptionStddevPopFieldsModel */
export { selectFromPokemonV2MovedamageclassdescriptionStddevPopFields, pokemonV2MovedamageclassdescriptionStddevPopFieldsModelPrimitives, PokemonV2MovedamageclassdescriptionStddevPopFieldsModelSelector } from "./PokemonV2MovedamageclassdescriptionStddevPopFieldsModel.base"

/**
 * PokemonV2MovedamageclassdescriptionStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MovedamageclassdescriptionStddevPopFieldsModel = PokemonV2MovedamageclassdescriptionStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
