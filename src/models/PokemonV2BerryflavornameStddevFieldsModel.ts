import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavornameStddevFieldsModelBase } from "./PokemonV2BerryflavornameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavornameStddevFieldsModel */
export interface PokemonV2BerryflavornameStddevFieldsModelType extends Instance<typeof PokemonV2BerryflavornameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavornameStddevFieldsModel */
export { selectFromPokemonV2BerryflavornameStddevFields, pokemonV2BerryflavornameStddevFieldsModelPrimitives, PokemonV2BerryflavornameStddevFieldsModelSelector } from "./PokemonV2BerryflavornameStddevFieldsModel.base"

/**
 * PokemonV2BerryflavornameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2BerryflavornameStddevFieldsModel = PokemonV2BerryflavornameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
