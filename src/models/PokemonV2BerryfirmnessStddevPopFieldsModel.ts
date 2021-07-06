import { Instance } from "mobx-state-tree"
import { PokemonV2BerryfirmnessStddevPopFieldsModelBase } from "./PokemonV2BerryfirmnessStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryfirmnessStddevPopFieldsModel */
export interface PokemonV2BerryfirmnessStddevPopFieldsModelType extends Instance<typeof PokemonV2BerryfirmnessStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryfirmnessStddevPopFieldsModel */
export { selectFromPokemonV2BerryfirmnessStddevPopFields, pokemonV2BerryfirmnessStddevPopFieldsModelPrimitives, PokemonV2BerryfirmnessStddevPopFieldsModelSelector } from "./PokemonV2BerryfirmnessStddevPopFieldsModel.base"

/**
 * PokemonV2BerryfirmnessStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2BerryfirmnessStddevPopFieldsModel = PokemonV2BerryfirmnessStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
