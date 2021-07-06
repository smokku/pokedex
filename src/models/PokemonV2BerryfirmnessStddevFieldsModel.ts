import { Instance } from "mobx-state-tree"
import { PokemonV2BerryfirmnessStddevFieldsModelBase } from "./PokemonV2BerryfirmnessStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryfirmnessStddevFieldsModel */
export interface PokemonV2BerryfirmnessStddevFieldsModelType extends Instance<typeof PokemonV2BerryfirmnessStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryfirmnessStddevFieldsModel */
export { selectFromPokemonV2BerryfirmnessStddevFields, pokemonV2BerryfirmnessStddevFieldsModelPrimitives, PokemonV2BerryfirmnessStddevFieldsModelSelector } from "./PokemonV2BerryfirmnessStddevFieldsModel.base"

/**
 * PokemonV2BerryfirmnessStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2BerryfirmnessStddevFieldsModel = PokemonV2BerryfirmnessStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
