import { Instance } from "mobx-state-tree"
import { PokemonV2BerryfirmnessAvgFieldsModelBase } from "./PokemonV2BerryfirmnessAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryfirmnessAvgFieldsModel */
export interface PokemonV2BerryfirmnessAvgFieldsModelType extends Instance<typeof PokemonV2BerryfirmnessAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryfirmnessAvgFieldsModel */
export { selectFromPokemonV2BerryfirmnessAvgFields, pokemonV2BerryfirmnessAvgFieldsModelPrimitives, PokemonV2BerryfirmnessAvgFieldsModelSelector } from "./PokemonV2BerryfirmnessAvgFieldsModel.base"

/**
 * PokemonV2BerryfirmnessAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2BerryfirmnessAvgFieldsModel = PokemonV2BerryfirmnessAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
