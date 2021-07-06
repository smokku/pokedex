import { Instance } from "mobx-state-tree"
import { PokemonV2LanguagenameStddevPopFieldsModelBase } from "./PokemonV2LanguagenameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LanguagenameStddevPopFieldsModel */
export interface PokemonV2LanguagenameStddevPopFieldsModelType extends Instance<typeof PokemonV2LanguagenameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LanguagenameStddevPopFieldsModel */
export { selectFromPokemonV2LanguagenameStddevPopFields, pokemonV2LanguagenameStddevPopFieldsModelPrimitives, PokemonV2LanguagenameStddevPopFieldsModelSelector } from "./PokemonV2LanguagenameStddevPopFieldsModel.base"

/**
 * PokemonV2LanguagenameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2LanguagenameStddevPopFieldsModel = PokemonV2LanguagenameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
