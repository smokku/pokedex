import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassStddevPopFieldsModelBase } from "./PokemonV2MovedamageclassStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassStddevPopFieldsModel */
export interface PokemonV2MovedamageclassStddevPopFieldsModelType extends Instance<typeof PokemonV2MovedamageclassStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassStddevPopFieldsModel */
export { selectFromPokemonV2MovedamageclassStddevPopFields, pokemonV2MovedamageclassStddevPopFieldsModelPrimitives, PokemonV2MovedamageclassStddevPopFieldsModelSelector } from "./PokemonV2MovedamageclassStddevPopFieldsModel.base"

/**
 * PokemonV2MovedamageclassStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MovedamageclassStddevPopFieldsModel = PokemonV2MovedamageclassStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
