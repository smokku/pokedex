import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavornameMaxFieldsModelBase } from "./PokemonV2BerryflavornameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavornameMaxFieldsModel */
export interface PokemonV2BerryflavornameMaxFieldsModelType extends Instance<typeof PokemonV2BerryflavornameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavornameMaxFieldsModel */
export { selectFromPokemonV2BerryflavornameMaxFields, pokemonV2BerryflavornameMaxFieldsModelPrimitives, PokemonV2BerryflavornameMaxFieldsModelSelector } from "./PokemonV2BerryflavornameMaxFieldsModel.base"

/**
 * PokemonV2BerryflavornameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2BerryflavornameMaxFieldsModel = PokemonV2BerryflavornameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
