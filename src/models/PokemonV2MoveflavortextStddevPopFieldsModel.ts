import { Instance } from "mobx-state-tree"
import { PokemonV2MoveflavortextStddevPopFieldsModelBase } from "./PokemonV2MoveflavortextStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveflavortextStddevPopFieldsModel */
export interface PokemonV2MoveflavortextStddevPopFieldsModelType extends Instance<typeof PokemonV2MoveflavortextStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveflavortextStddevPopFieldsModel */
export { selectFromPokemonV2MoveflavortextStddevPopFields, pokemonV2MoveflavortextStddevPopFieldsModelPrimitives, PokemonV2MoveflavortextStddevPopFieldsModelSelector } from "./PokemonV2MoveflavortextStddevPopFieldsModel.base"

/**
 * PokemonV2MoveflavortextStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MoveflavortextStddevPopFieldsModel = PokemonV2MoveflavortextStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
