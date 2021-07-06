import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavormapMinFieldsModelBase } from "./PokemonV2BerryflavormapMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavormapMinFieldsModel */
export interface PokemonV2BerryflavormapMinFieldsModelType extends Instance<typeof PokemonV2BerryflavormapMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavormapMinFieldsModel */
export { selectFromPokemonV2BerryflavormapMinFields, pokemonV2BerryflavormapMinFieldsModelPrimitives, PokemonV2BerryflavormapMinFieldsModelSelector } from "./PokemonV2BerryflavormapMinFieldsModel.base"

/**
 * PokemonV2BerryflavormapMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2BerryflavormapMinFieldsModel = PokemonV2BerryflavormapMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
