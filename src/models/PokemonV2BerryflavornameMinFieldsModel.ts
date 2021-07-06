import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavornameMinFieldsModelBase } from "./PokemonV2BerryflavornameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavornameMinFieldsModel */
export interface PokemonV2BerryflavornameMinFieldsModelType extends Instance<typeof PokemonV2BerryflavornameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavornameMinFieldsModel */
export { selectFromPokemonV2BerryflavornameMinFields, pokemonV2BerryflavornameMinFieldsModelPrimitives, PokemonV2BerryflavornameMinFieldsModelSelector } from "./PokemonV2BerryflavornameMinFieldsModel.base"

/**
 * PokemonV2BerryflavornameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2BerryflavornameMinFieldsModel = PokemonV2BerryflavornameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
