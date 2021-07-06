import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavormapStddevPopFieldsModelBase } from "./PokemonV2BerryflavormapStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavormapStddevPopFieldsModel */
export interface PokemonV2BerryflavormapStddevPopFieldsModelType extends Instance<typeof PokemonV2BerryflavormapStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavormapStddevPopFieldsModel */
export { selectFromPokemonV2BerryflavormapStddevPopFields, pokemonV2BerryflavormapStddevPopFieldsModelPrimitives, PokemonV2BerryflavormapStddevPopFieldsModelSelector } from "./PokemonV2BerryflavormapStddevPopFieldsModel.base"

/**
 * PokemonV2BerryflavormapStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2BerryflavormapStddevPopFieldsModel = PokemonV2BerryflavormapStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
