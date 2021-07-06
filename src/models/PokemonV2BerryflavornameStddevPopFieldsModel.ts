import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavornameStddevPopFieldsModelBase } from "./PokemonV2BerryflavornameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavornameStddevPopFieldsModel */
export interface PokemonV2BerryflavornameStddevPopFieldsModelType extends Instance<typeof PokemonV2BerryflavornameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavornameStddevPopFieldsModel */
export { selectFromPokemonV2BerryflavornameStddevPopFields, pokemonV2BerryflavornameStddevPopFieldsModelPrimitives, PokemonV2BerryflavornameStddevPopFieldsModelSelector } from "./PokemonV2BerryflavornameStddevPopFieldsModel.base"

/**
 * PokemonV2BerryflavornameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2BerryflavornameStddevPopFieldsModel = PokemonV2BerryflavornameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
