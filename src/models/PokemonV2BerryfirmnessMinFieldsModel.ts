import { Instance } from "mobx-state-tree"
import { PokemonV2BerryfirmnessMinFieldsModelBase } from "./PokemonV2BerryfirmnessMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryfirmnessMinFieldsModel */
export interface PokemonV2BerryfirmnessMinFieldsModelType extends Instance<typeof PokemonV2BerryfirmnessMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryfirmnessMinFieldsModel */
export { selectFromPokemonV2BerryfirmnessMinFields, pokemonV2BerryfirmnessMinFieldsModelPrimitives, PokemonV2BerryfirmnessMinFieldsModelSelector } from "./PokemonV2BerryfirmnessMinFieldsModel.base"

/**
 * PokemonV2BerryfirmnessMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2BerryfirmnessMinFieldsModel = PokemonV2BerryfirmnessMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
