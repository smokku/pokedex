import { Instance } from "mobx-state-tree"
import { PokemonV2StatStddevPopFieldsModelBase } from "./PokemonV2StatStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2StatStddevPopFieldsModel */
export interface PokemonV2StatStddevPopFieldsModelType extends Instance<typeof PokemonV2StatStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2StatStddevPopFieldsModel */
export { selectFromPokemonV2StatStddevPopFields, pokemonV2StatStddevPopFieldsModelPrimitives, PokemonV2StatStddevPopFieldsModelSelector } from "./PokemonV2StatStddevPopFieldsModel.base"

/**
 * PokemonV2StatStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2StatStddevPopFieldsModel = PokemonV2StatStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
