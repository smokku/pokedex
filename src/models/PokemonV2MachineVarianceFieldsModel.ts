import { Instance } from "mobx-state-tree"
import { PokemonV2MachineVarianceFieldsModelBase } from "./PokemonV2MachineVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MachineVarianceFieldsModel */
export interface PokemonV2MachineVarianceFieldsModelType extends Instance<typeof PokemonV2MachineVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MachineVarianceFieldsModel */
export { selectFromPokemonV2MachineVarianceFields, pokemonV2MachineVarianceFieldsModelPrimitives, PokemonV2MachineVarianceFieldsModelSelector } from "./PokemonV2MachineVarianceFieldsModel.base"

/**
 * PokemonV2MachineVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MachineVarianceFieldsModel = PokemonV2MachineVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
