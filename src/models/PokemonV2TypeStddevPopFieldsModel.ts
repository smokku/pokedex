import { Instance } from "mobx-state-tree"
import { PokemonV2TypeStddevPopFieldsModelBase } from "./PokemonV2TypeStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypeStddevPopFieldsModel */
export interface PokemonV2TypeStddevPopFieldsModelType extends Instance<typeof PokemonV2TypeStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypeStddevPopFieldsModel */
export { selectFromPokemonV2TypeStddevPopFields, pokemonV2TypeStddevPopFieldsModelPrimitives, PokemonV2TypeStddevPopFieldsModelSelector } from "./PokemonV2TypeStddevPopFieldsModel.base"

/**
 * PokemonV2TypeStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2TypeStddevPopFieldsModel = PokemonV2TypeStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
