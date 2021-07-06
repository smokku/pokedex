import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityeffecttextVarianceFieldsModelBase } from "./PokemonV2AbilityeffecttextVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityeffecttextVarianceFieldsModel */
export interface PokemonV2AbilityeffecttextVarianceFieldsModelType extends Instance<typeof PokemonV2AbilityeffecttextVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityeffecttextVarianceFieldsModel */
export { selectFromPokemonV2AbilityeffecttextVarianceFields, pokemonV2AbilityeffecttextVarianceFieldsModelPrimitives, PokemonV2AbilityeffecttextVarianceFieldsModelSelector } from "./PokemonV2AbilityeffecttextVarianceFieldsModel.base"

/**
 * PokemonV2AbilityeffecttextVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2AbilityeffecttextVarianceFieldsModel = PokemonV2AbilityeffecttextVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
