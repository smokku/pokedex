import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavormapStddevFieldsModelBase } from "./PokemonV2BerryflavormapStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavormapStddevFieldsModel */
export interface PokemonV2BerryflavormapStddevFieldsModelType extends Instance<typeof PokemonV2BerryflavormapStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavormapStddevFieldsModel */
export { selectFromPokemonV2BerryflavormapStddevFields, pokemonV2BerryflavormapStddevFieldsModelPrimitives, PokemonV2BerryflavormapStddevFieldsModelSelector } from "./PokemonV2BerryflavormapStddevFieldsModel.base"

/**
 * PokemonV2BerryflavormapStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2BerryflavormapStddevFieldsModel = PokemonV2BerryflavormapStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
